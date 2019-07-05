export default async function(input) {
    try {
        console.log(input)
      const key = "AIzaSyCSusLqZ-LbzL5bDGIfvOAgzxdCpLGAnbI";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${key}`
      );
      const data = await response.json();
      
      return data;
    } catch (err) {
      console.log(err);
    }
}
