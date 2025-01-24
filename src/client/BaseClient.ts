import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./config";

// Initialize Firebase
export class BaseClient {
  private app = initializeApp(firebaseConfig);
  root = "ggj2025";
  db = getDatabase(this.app);
}
