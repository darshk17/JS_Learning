//// Simple await
// function fetchUserData(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve({name:"Darsh", url:"https://google.com"})
//             console.log("User data fetched Successfully");
            
//         }, 3000);
//     } )
// }

// async function getUserData() {
//     try{
// console.log('Fetching our data...');
// const userData=await fetchUserData();
// console.log("User Data: ",userData);
// }
// catch{
//     console.log("Error while fetching data");
//     }
// }

// getUserData()



// With two Promises return
function fetchPostData(){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Post data Fecthed")
    }, 2000);
})
}
function fetchCommentData(){
return new Promise((resolve) => {
setTimeout(() => {
    resolve("Comment Data Fetched")
}, 3000);
})
}

async function getblogData() {
    try {
        console.log("Fetching data....");
        // const PostData=await fetchPostData();
        // const CommentData=await fetchCommentData();
        const [PostData,CommentData]=await Promise.all([fetchPostData(),fetchCommentData()]);
        console.log(PostData);
        console.log(CommentData);     
        console.log("Fetch  Complete");
        
    } catch (error) {
        console.error("Error while fetching data",error);
        
    }
}
getblogData();