import OpenAI from "openai";
import { MY_OPENAI_API_KEY, MY_OPENAI_ORG_ID } from "./Constants";

const openai = new OpenAI({
  organization: MY_OPENAI_ORG_ID,
  apiKey: MY_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
