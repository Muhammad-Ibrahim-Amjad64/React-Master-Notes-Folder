// name  validation 

/^[A-Za-z\s]+$/.test(x) //returns true if matched, vaidates for a-z and A-Z and white space

/^[A-Za-z0-9\s]+$/   // street 

/(^\d{5}$)|(^\d{5}-\d{4}$)/ // postal code s