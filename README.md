# Test
InterviewTest

*/countries
	*This is the React app running on the default port 3000, use npm start on this dir to initialize the app

*/server
	*Json-server hosting the information on port 3001, use npm start on this dir to initialize the listening server

App is not built yet, directories still contain all dependencies
*Few issues I did not have the time to fix
	*Mainly UI stuff, I was focused on finishing it because I lost some time trying to understand UI Tradeshift
	*Modals are created per found instance, I know this is not the best approach but I did not have the time to fix it so that there is only one modal and information within it varies
	*The only issue with the json-server is that when you query for a company name it has to be exact, I switched it so that what you type is seached for in all the fields instead
	*Countries are populated normaly, did regex to remove the information that was on the "()" as it seemed like it was only for clarification and companies did not include that information in their country field
	*Not sure why you would use the country code in this instance, it only required me to do an extra search due to the fact that I tied the value to it but it makes it scalable 