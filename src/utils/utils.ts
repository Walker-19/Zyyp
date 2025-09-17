import bcrypt from "bcryptjs";

export async function hasPassword(value : string) : Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(value, salt);
    return hash;
}

export async function comparePassword(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
}

