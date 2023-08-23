const addToDb=(id)=>{
    let bookmark=getBookmark();
    const quantity=bookmark[id];
    if(quantity){
     const newQuantity=quantity+1;
     bookmark[id]=newQuantity;
    }
    else{
     bookmark[id]=1;
    }
    localStorage.setItem('bookmark-blog',JSON.stringify(bookmark));
}
const getBookmark=()=>{
    let bookmark={};
    const storedBookmark=localStorage.getItem('bookmark-blog');
    if(storedBookmark){
       bookmark=JSON.parse(storedBookmark);
    }
    return bookmark;
}
const removeBookmark=(id)=>{
    const bookmark=getBookmark();
    if(id in bookmark){
        delete bookmark[id];
        localStorage.setItem('bookmark-blog',JSON.stringify(bookmark));
    }
}

const deleteBookmark=()=>{
    localStorage.removeItem('bookmark-blog');
}

export {
    addToDb,
    getBookmark,
    deleteBookmark,
    removeBookmark
}