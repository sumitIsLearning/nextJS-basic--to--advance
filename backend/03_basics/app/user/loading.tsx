export default function Loader() {
    return (
        <div>
            Loading...
        </div>
    )
} // in next js if you want to show loading to the user you have to create a file with the name loading , and define the skeleton there , then next js will take care of other things. 
// what happens:
/* 
- first it goes to /user/page.tsx and hit the api , but when it see that its take too long to load.
-it falls back to the loading.tsx page and shows the skeleton or loading screen
- what if you don't define loading page
- then it will directly show you the result screen. no loading nothing 
 */