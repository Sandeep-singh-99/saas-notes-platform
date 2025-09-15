import { model, models, Schema } from "mongoose";

export interface IUser {
    _id?: string;
    email: string;
    password: string;
    role: "Admin" | "Member";
    tenantId: Schema.Types.ObjectId;
}

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["Admin", "Member"],
        default: "Member",
    },

    tenantId: {
        type: Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
    },

}, { timestamps: true })

const User = models.User || model("User", UserSchema);

export default User;