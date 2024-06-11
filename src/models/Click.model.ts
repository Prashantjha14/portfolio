import { Schema, models, model } from "mongoose";

export interface IClick {
  clickCount: number;
}

const clickSchema = new Schema<IClick>({
  clickCount: { type: Number, default: 0 },
});

const Click = models?.Click || model("Click", clickSchema);
export default Click;
