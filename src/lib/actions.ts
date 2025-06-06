"use server";

export async function createSubscriber(formData: FormData) {
    console.log('raw data', formData.get("email"))
}