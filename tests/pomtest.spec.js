import {  test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { SearchPage } from "../pages/SearchPage";
import { MessagePage } from "../pages/MessagePage";

test('test',async({page})=>{
    const login=new LoginPage(page);
    await login.gotologinpage();
    await login.login('aabhar_2305','aabhar@23');


    //search
    const search=new SearchPage(page);
    await search.gotoSearch();
    await  search.searchPerson('ritik.bhatt07')


    const message=new MessagePage(page);
    await message.openMessageDialog();
    await message.sendMessage("Hii, How are you")
});

