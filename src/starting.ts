import Cryptr from 'cryptr';
export async function foo() {
    const c = new Cryptr("foo bar")
    return await Xrm.WebApi.retrieveRecord("account", "123;");
}