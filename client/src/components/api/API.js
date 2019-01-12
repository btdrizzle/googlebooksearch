import axios from "axios";

export default {
    searchBooks: function(query) {
        const URL = "https://www.googleapis.com/books/v1/volumes?q=";
        const queryFix = query.replace(/\s/g, "+"); 
        return axios.get(`${URL}${queryFix}`);
    }
  };

