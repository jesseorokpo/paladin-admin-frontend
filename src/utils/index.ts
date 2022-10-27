import { showNotification } from "@mantine/notifications";
import { completeNavigationProgress } from "@mantine/nprogress";
import { AxiosError, AxiosResponse } from "axios";

let currencyFormatter = require("currency-formatter");

export function formatCurrency(val: number) {
  return currencyFormatter.format(val, { code: "NGN" });
}

export function handleAxiosError(err: any) {
  completeNavigationProgress();
  let error: AxiosError = err as AxiosError;
  console.log(err);
  console.log(error.response);
  return "Message";
}

export function handleAxiosResponse<T>(response: AxiosResponse): T {
  let data = response.data;

  if (data.responseBody) {
    return data.responseBody;
  }
  return data;
}

export function handleSuccessEvent(message?: string) {
  showNotification({
    message: message ?? "Action completed successfully",
  });
}
