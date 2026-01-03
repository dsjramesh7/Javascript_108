// shortcircuting && and ||
let result = "" || undefined || "I am here" || null || 0;
let result2 = "hello" && "" && undefined && "I am here" && null && 0;
console.log(result);
console.log(result2);

// nullish coealcising
let dataExist = null ?? "No date present"; // this just works on null and undefined
let dataExist2 = 0 ?? "anything";
console.log(dataExist);
console.log(dataExist2);
