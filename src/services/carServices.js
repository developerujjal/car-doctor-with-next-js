export const getServicesData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`);
        const data = await res.json();
        return data;

    } catch (error) {
        return [];
    }
}


export const getSingelData = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
        return [];
    }
}

