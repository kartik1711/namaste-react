# Namaste React

Igniting our app

What does igniting our app means?
We have created multiple files--but is this code ready to push to production--no

Basically this code needs to get optimized--bundle our code--minify our code--compress the file--optmize the images--you need to do lot of processing before pushing it to production

When you do create react-app it gives us sccafold to us which is already production ready
How we can react our own create react-app--production ready app

if we want to create fast prod ready app--can react itself do it?--no
there are alot of production packages,libraries are used to make the app fast
there are a lot of other things used to make our app fast

------------------------

How we can get those libraries and packages?
NPM - node package manager--it is wrong
there is no place where it is written that it is node package manager
npm manages packages behind the scenes, but it does not stand for node package manager
for the fun fact, they call it whatever

NPM--it is standard repository for all the packages
any package that you want to include in your project you can use npm
npm init      it will intiialize the project
npm init -y     it will skip a lot of configurations

if npm is not installed -- sudo apt install npm--use this command to install the npm
when you do npm init it will ask you questions...give answers to it and your project will get initialize--after this package.json file will be created

package.json -- it is basically configuration for our npm--it is in json structure
packages are also known as dependencies

------------------------

let's start installing dependencies in our project
most imp package in our project--is a bundler
when we create all the files--then our whole code needs to be bundled together


Basically this code needs to get optimized--bundle our code--minify our code--compress the file--optmize the images--you need to do lot of processing before pushing it to production

the whole code needs to be cleaned before sending it to the production
web pack,parcel,vite--these are all bundlers

create react app--behind the scenes uses web pack bundler--it uses babel
parcel will ignite our app--it will give muscles to our project
now we have npm we can install parcel to out app easily

------------------------

npm install -D parcel
-D means

there are two types of dependencies
one is the dev dependencies--required at the time of development of a project/dev phase
normal dependencies are used in production

so the command is installing the parcel from the npm repo which  is remote

------------------------

we will get parcel in the package.json in dev dependencies
carrot--new version gets released--parcel will automatically be updated to the new version--safe to put carrot
tilde--it will install the major version of the dependencies

------------------------



























