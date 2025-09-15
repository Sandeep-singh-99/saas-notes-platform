import { model, models, Schema } from "mongoose";

export interface ITenant {
    _id?: string;
    name: string;
    slug: string;
    plan: "Free" | "Pro";
}

const TenantSchema = new Schema<ITenant>({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    slug: {
        type: String,
        required: true,
        unique: true,
    },

    plan: {
        type: String,
        enum: ["Free", "Pro"],
        default: "Free",
    },
}, { timestamps: true });


const Tenant = models.Tenant || model<ITenant>("Tenant", TenantSchema);

export default Tenant;