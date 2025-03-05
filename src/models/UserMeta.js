import knex from "../lib/Knex.js";
import { Model } from "objection";
import User from "./User.js"; // Assure-toi que le chemin est correct

// instantiate the model
Model.knex(knex);

// define the UserMeta model
class UserMeta extends Model {
  static get tableName() {
    return "user_meta";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" }, // ✅ Correction ici
        quote: { type: "string", maxLength: 255 },
        location: { type: "string", maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user_meta.user_id",
          to: "users.id",
        },
      },
    };
  }
}

export default UserMeta;
