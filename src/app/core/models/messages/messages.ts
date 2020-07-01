export class Messages {
  success: boolean;
  error: boolean;
  warning: boolean;

  constructor(success: boolean = false,
              error: boolean = false,
              warning: boolean = false) {
    this.success = success;
    this.error = error;
    this.warning = warning;
  }
}
