export function showErrorData(data) {
  try {
    if (Array.isArray(data)) {
      return data.join("\n");
    } else if (typeof data === "string") {
      return data;
    } else {
      return "";
    }
  } catch (error) {
    console.log("🚀 ~ showErrorData ~ error:", error);
    return "";
  }
}
