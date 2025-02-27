import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DB_URI;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    // maxPoolSize: 50, // Limit the connection pool size
};

let client;
let db;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().then(() => {
        console.log("Connected to MongoDB");
        return client;
    }).catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        throw err;
    });
} else {
    client = global._mongoClientPromise; // Reuse the cached connection promise
}

export async function dbConnect() {
    if (!db) {
        try {
            const connectedClient = await client; // Wait for the client to connect
            db = connectedClient.db(process.env.DB_NAME); // Initialize the db instance
        } catch (error) {
            console.error("DB Connection Error: ", error);
            throw error; // Rethrow the error to handle it in the calling function
        }
    }
    return db; // Return the cached db instance
}



/* import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export async function dbConnect() {
    if (db) {
        return db;
    }

    try {

        const uri = process.env.DB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        db = client.db(process.env.DB_NAME);
        return db;

    } catch (error) {
        console.log("DB ERROR: ", error)
        return null; // Return `null` instead of `error` to avoid unexpected behavior
        // return error
    }
} */