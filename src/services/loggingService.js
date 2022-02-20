import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://151123215c8449e2910801776c365085@sentry.io/1784490"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
