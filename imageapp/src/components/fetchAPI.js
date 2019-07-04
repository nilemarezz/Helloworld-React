export default async function(term) { 
    
    try {
        let response = await fetch(
          `https://api.unsplash.com/search/photos?query=${term}&client_id=cbe4c8c22b398b7876e418352c103880203ac7a7f204c8d4f4b8ee7e00c8cac9`
        );
        // get data
        let data = await response.json();
        return data;
        // setState
        
      } catch (err) {
        console.log(err);
      }

 }