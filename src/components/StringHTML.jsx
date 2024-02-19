export const StringHTML = ({ htmlString }) => {
    //console.log(htmlString)
    return (
    <div class="text-2xl text-start mx-20 my-10">    
        <div dangerouslySetInnerHTML={{__html: htmlString}} ></div>
    </div>
    )
}