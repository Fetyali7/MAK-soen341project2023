# After cloning the repository
## If you get: 'sh: 1: react-scripts: not found'
### These steps will install necessary modules/packages
Open a terminal \
cd 341-project \
npm install \   
cd .. \
cd Server \ 
npm install \ 


# To run Website
Inside 341-project folder (folder with App.js) \
npm run start \ 


# To run Server
Inside Server folder\
npm run devStart\

# SQL Tables necessary
## JobPostings
|Column Name | DataType | PK | NN | AI | Default/Expression |
| :-: | :-: | :-: | :-: | :-: | :-: |
|idjobpostings| INT | Y | Y | Y | |
|companyName|VARCHAR(45)|X| Y | X | |
|phoneNumber|VARCHAR(45)|X| Y |X | |
|employerName|VARCHAR(45)|X| Y |X| |
|jobDescription|VARCHAR(45)|X|X|X|NULL |
|location|VARCHAR(45)|X| Y |X| |
|Employer|VARCHAR(45)|X| Y |X| |

## userSu
|Column Name | DataType | PK | NN | AI | Default/Expression |
| :-: | :-: | :-: | :-: | :-: | :-: |
|iduserSu| INT | Y | Y | Y | |
|username|VARCHAR(45)|X| Y | X | |
|password|VARCHAR(45)|X| Y |X | |
|email|VARCHAR(45)|X| Y |X| |
|apliemp|VARCHAR(45)|X|X|X| NULL|

## UserLogin
|Column Name | DataType | PK | NN | AI | Default/Expression |
| :-: | :-: | :-: | :-: | :-: | :-: |
|idUserLogin| INT | Y | Y | Y | |
|username|VARCHAR(45)|X| Y | X | |
|password|VARCHAR(45)|X| Y |X | |
|email|VARCHAR(45)|X| Y |X| |
|apliemp|VARCHAR(45)|X|X|X|NULL |


## Applications
|Column Name | DataType | PK | NN | AI | Default/Expression |
| :-: | :-: | :-: | :-: | :-: | :-: |
|idApplications| INT | Y | Y | Y | |
|applicantName|VARCHAR(45)|X| Y | X | |
|phoneNumber|VARCHAR(45)|X| Y |X | |
|email|VARCHAR(45)|X| Y |X| |
|applicantDescription|VARCHAR(45)|X| Y |X| |
|yearsExperience|VARCHAR(45)|X| Y |X| |
|location|VARCHAR(45)|X| Y |X| |
|Applicant|VARCHAR(45)|X| Y |X| |
|Employer|VARCHAR(45)|X| Y |X| |
|companyName|VARCHAR(45)|X|X|X| NULL |
|jobDescription|VARCHAR(45)|X| X |X| NULL|


## Interviews
|Column Name | DataType | PK | NN | AI | Default/Expression |
| :-: | :-: | :-: | :-: | :-: | :-: |
|idInterviews| INT | Y | Y | Y | |
|companyName|VARCHAR(45)|X| Y | X | |
|jobDescription|VARCHAR(45)|X|Y|X| |
|phoneNumber|VARCHAR(45)|X| Y |X | |
|location|VARCHAR(45)|X| Y |X| |
|Employer|VARCHAR(45)|X| Y |X| |
|Applicant|VARCHAR(45)|X| Y |X| |
