import { model, models, Schema } from "mongoose";

export interface INote {
    _id?: string;
    title: string;
    content: string;
    tenantId: Schema.Types.ObjectId;
    authorId: Schema.Types.ObjectId;
}

const  NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    tenantId: {
        type: Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
    },

    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

const Note = models.Note || model("Note", NoteSchema);

export default Note;