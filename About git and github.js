// ---------------------------------------------------------------------
// Git commands 
///----------------------------------------------------------------------
c/Users/ibram/OneDrive/Desktop/Software-Houses-Folder
// * cd /c      // to move in a folder
// * git config --global user.name "Ibrahim"        // to initialize the user name
// * git config --global user.email "Ibrahim"       // to initialize the user email

// * git config --global user.name        // to access the registered  user name
// * git config --global user.email       // to access the registered  user email



// * git status ->  ( display git repository files - status kaisay check krna ha git repository ka )

// * git init -> (To make a folder a git repository )

// * git add --a  -> ( To add all the files in the staging area we will use this line )

// *  git rm --cached App.js.txt   -> to stage a file and move it to the woriking directory

// * git add filename  -> ( to  stage a specific file )

// * git commit -m "any mesage"  -> (to make a commit with a message)


// * git log  -> to display all the commits

// * rm -rf .git  -> To delete a git repository completly

// * git clone (https link) -> To clone a directory on the github

// * git clone (url) recommended name -> to clone with name

// * git diff -> to compare working directory with staging area -> staging area mn daalne ke baad kia changes kre ye wo display kry ga

// * git diff  --staged -> to compare staging area files with the last commit


// * git commit -a -m "2nd commit -> used to directly add files from working directory to the git directory excluding the staging area

//-------------------------------------------------

// basic linux commands

// pwd -> present working directory ka path display

// cd tensorlow/  folder ke andar seige

// touch filename.ext -> to create any file

// these are the built in editors in Linux to open files etc
// git config core.editor emacs
// git config core.editor vim

//---------------------------------------------------------------------------------





// what is git :
// * git is a version control system
// * easily recover files
// * who introduced an issue and when ( yani agar kisi ne commit kra commit===change kra to pta chl jaa a ga ke kisne cahge kia to gr br)
// * rollback to previously working state

// Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

// 	• Git advantage
// 		○ Easily recover files
// 		○ Who introduced an issue and when
// 		○ Rollback the code to a working previous state
// 	• Feature
// 		○ Fast
// 		○ Capture the snapshot, not the difference
// 		○ Almost every operation is local (no internet required)  i.e. all operations are performed on locally and after that can push the repo to a remote (centralized server).
// 		○ Git has integrity i.e all the changes are tracked and need approval for merging. Has SHA1 checksum to validate the files.
// Git generally only adds data

//----------------------------------------
// Shortcuts
//------------------------------------

// crtl + - zoomn in zoom out
// up arrow key to copy the upper statemant


//--------------------------------------------------------
// git three  stages architecture
//--------------------------------------------------------


// v1 apne  bna lia ab aap chate hain ke hm version 1 jo stable ha usko save krlain to is save krne ko COMMIT kehty hain

// TO commit we will (we can commit with message  eg working v1)


// Local operations


// * working directory -> aapne apne folder ko khola aur isme jo files hain to wo ha apki working directory

// * staging area -> isme aap wo files daalain gy jo aap chahte hain ke agly commit mn jaa aain . aur agar nai daalain gy to nai agalay commit mn ja aa gi
// (we can also commit directory from git directory)

// eg

// index.js    stage (krdia to imporve)
// index.css   stage (krdia to imporve)
// engine.js   error  (so no staged)


// * git directory

// after commit all files are stored in .git directory folder is hidden folder



//--------------------------------------------------------------------
// Practical
//--------------------------------------------------------------------

// * git status ->  ( display git repository files - status kaisay check krna ha git repository ka )

// * git init -> (To make a folder a git repository )

// ab jb hm git repository bna dain gy to saari files untracked hngi yani in working directory to put them in staging area we will use git



//-------------------------------------------------------------------------
// Cloning a git repository
//------------------------------------------------------------------------

// git clone https customName

//-----------------------------------------------------------------------
// life cycle
//-----------------------------------------------------------------------

// .git  split files to the working directory wrt to the current commit

// unmodified === staged


// Staging area == commit krny ki tayaari

// jb hm commit karain gy to staging area wali files  commit mn jaa aain gyv

// modified === stracked file modified    -> git add krke doobara staged


// -----------------------------------------------------------
// git ignore
//------------------------------------------------------------

//  make a gitignore folder to ignore files and folders

// git will not track the blank folder

// error.log    --- agar sirf file ka naam enter karain gy to saari files with that name will be ignored if you wnat to ignore a specific file then put filepath
// like this  /node/error.txt or in current folder like this /error.log

// *.log

// folder/   // all folders wth that name

// /folder/     // full path specific folder

//    static/dir

// ------  practice paths

// node_modules/
// error.log

// /nodejs.txt


// nodejs.txt

// /node
// /node/*.txt


//-------------------------------------------------------------
// Git diff
//-------------------------------------------------------------

// this command s used to compare file changes  2 main tyes

// * git diff  --staged -> to compare staging area files with the last commit

//---------------------------
// skipping the staging area
//---------------------------

// to skip the staging adn direct commit use

// * git commit -a -m "2nd commit"

// this will move all the tracked files to the git directory but not the untracked files


// * git log (this will display the log of all the commited commits)

// *  git checkout -- fileName.txt (To unmodifying the single file)

// or  * git restore filename.txt

//* git checkout -f ( unmodifying all the files )



//-------------------------------------------
// github guide start
//------------------------------------------



// to create a new branch

// * git checkout -b develop

// to switch between branches

// * git checkout master


// (always commit before switching )

// to merge two branches

// git merge ibrahim


// ----------------------------------------------------------
// Baraching workflow
//-----------------------------------------------------------

// Long running branching

// topic branching 