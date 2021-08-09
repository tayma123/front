export class AuthLoginInfo {
    user_name: string;
    pass_word: string;

    constructor(user_name: string, pass_word: string) {
        this.user_name = user_name;
        this.pass_word = pass_word;
    }
}
