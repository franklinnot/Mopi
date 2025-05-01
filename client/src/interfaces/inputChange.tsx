import React from "react";

export default interface InputChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}
