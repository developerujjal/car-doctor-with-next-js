export const getServicesData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/services');
        const data = await res.json();
        return data;

    } catch (error) {
        return error;
    }
}


export const getSingelData = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/services/${id}`);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}

