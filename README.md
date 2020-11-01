What is a modal? Most of the time we see them on the web as a pop-up window that prompts us to log-in to a site when we try and do something that only users can. Such as when your on dev.to and you go to like something and you're prompted to login without leaving the page. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/72rg10ufihwb5axf34p3.png)

By the definition in web design, it is a graphical control element that is subordinate to an application's main window per [google search result](https://www.google.com/search?rlz=1C5CHFA_enUS905US906&sxsrf=ALeKk01WiCWUoP4aYH6814uUHa3rirsQJQ%3A1599350295778&ei=FyZUX6SFL8Hl5gKowrz4DQ&q=what+is+a+modal+in+web+design&oq=what+is+a+modal&gs_lcp=CgZwc3ktYWIQARgAMgcIABAUEIcCMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgcIIxCwAhAnOgQIABANOggIABAIEA0QHjoHCCMQsQIQJzoECAAQCjoFCAAQkQI6BwgAELEDEEM6BAgAEEM6BggAEAcQHjoICAAQBxAKEB46BQgAELEDULVNWKOaAWCpqAFoAHACeACAAZYBiAGdCpIBAzYuN5gBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab)

##What you will learn. 

best practice for setting up a modal quickly with styled-components.

##Why this is useful. 

You can have users do site essentials without having to redirect which can save you time coding and make your website run faster because you will run into situations where this will allow you to keep state instead of having to reset with a redirect. 

logging into dev.to when you want to like something for example. 

##Prerequisites. 

1. basic knowledge of [javascript](https://javascript.info)

2. basic understanding of [react](https://reactjs.org)

3. basic [CSS](https://www.w3schools.com/css/css_intro.asp) skills.

4. [nodejs](https://nodejs.org/en/) installed.

5. [create-react-app](https://www.npmjs.com/package/create-react-app) installed.

6. the ability to install [npm](https://www.npmjs.com/get-npm) packages.

5.I will be using bash/unix terminal but you can follow along if you are using PC or Linux. 

first step is make a new react app in your parent directory from the terminal. 

```bash
create-react-app modal-tutorial
```

cd into the project directory and open it with a text editor. _I will be using vscode_

```bash
cd modal-tutorial
```

and open...

```bash
code .
```

make sure everything looks like an ordinary react app and run start in the terminal to make sure you have the boilerplate made. 

```bash
npm start
```
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/zzfuog1izqqjhoxf5kyt.png)

Tear down the app and so that you have a blank white screen by changing the App.js to look like this. 

```javascript
import React from 'react';


function App() {
  return (
    <div>
     
    </div>
  );
}

export default App;
```

Now its time to make the modal. 

we will use [styled-components](https://styled-components.com/) for this but its worth knowing how to do style objects since it appears to be the standard for react native applications. If you have a solid understanding of react I suggest learning [react native](https://reactnative.dev/) so that you can take your react skills to the next level. 

go to the command line and `npm install styled-components`

```bash
npm i styled-components
```

This took a long time for me compared to usual and if yours did too, it may have something to do with [this](https://stackoverflow.com/questions/41524903/why-is-npm-install-really-slow#:~:text=Summary,of%20a%20severely%20outdated%20version.).

now we need to. 

1. import npm at the top. 

2. make a styled-div. 

3. make the styled-div the parent most div. 

at the top under `import React from 'react'` add the `styled-components import`.

```javascript
import styled from 'styled-components';
```  

Below the closing bracket of the `App` function and above the `default export` make the styled-div.

```javascript
const AppStyles = styled.div`

`;
``` 

something to know is that the AppStyles has to have a capital 
__A__ or you will crash the app.

making this a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) is necessary it will not work with single or double-quotes.

To add this to the component. we want to make fragments that are represented by `<> code stuff inside cool tags... </>`

I like to add these right in front of the parenthesis  
of the`App`'s `return` statement. 

```javascript
 return (<>

  </>);
```

Add the AppStyles variable like its a `cool stuff inside the tags`. 

```javascript
  return (<>
      <AppStyles>
        
      </AppStyles>
  </>);
```


 I'm going to add a class inside the AppStyles div in the [JSX](https://reactjs.org/docs/introducing-jsx.html)

```jsx
  <div className="modal">
          
        </div>
```

we want to represent the modal as a box, give them height, width, and border inside the backticks for the styled div like so. 

```css
const AppStyles = styled.div`

.modal {
  width: 20px; 
  height: 20px;
  border: 1px solid black;
}

`;
```

We have a parent child relationship with these elements. that means we can use flex to position everything in the center. 

This is being read like an empty div if you look in the dev-tools.

we are going to use the dev tools first paradigm which means that we will start by making things look right in the dev tools. You can use Safari or firefox by I will be using Chrome. 

let's go to the web page and press 3 keys at the same time option/alt + command + j. Alternately you can right-click and f open them with the inspector. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9nr6y20rsrfvjq5nnjzd.png)

go to the top right corner and click on the element inspector. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/wf4ib37cu02vade5lijp.png)

Now when the mouse hovers over an element you can see the CSS associated with it. 

the goal is the get everything looking good from the dev tools and copy and paste the changes we make in the dev tools to the code base. it's important to always copy and paste from the dev tools because if you make any changes that cause a rerender you will lose the changes in the dev tools. 

you can take the risk and get [this extension](https://chrome.google.com/webstore/detail/autosave-webpage/kfnkfhdbeidcdpdlefbfabepmfhldkoi?hl=en-US) however I do not recommend it because it doesn't have enough reviews. if anyone wants to try it and leave a comment I would appreciate it.

click on the small box in the top right corner and report back to the HTML in the dev tools. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/rig05xld6qrsr0eqhpup.png)

if you see elements and styles highlighted you will see the CSS as it is represented on the page. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/scltu98dzgbevxzslo0l.png)

We want to get the parent ready to make changes to the child. so add flex to the parent container. _(do this in the dev tools first.)_

 ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qs7mhahm7sw78zt8g21a.png)

Go to the part of the dev-tools that has a long random sequence of letters as a class name for a div.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/k7oyzxcyqhpwo85ops9d.png)

Now add flex to the CSS sheet represented in the dev-tools. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/rpieofjpy0t4qq0avj5r.png)

We will get everything centered then copy and paste it to our react code base. I will provide the css to add the project.

next, we will `justify-content: center` so that everything lines up horizontally. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/h11b600hh8233lr96hpm.png)

Centering vertically requires us to make a minimum view height so that when we do center it we see that it was centered. if you don't add a view height it appears as though nothing happens. 

after you add the `min-height: 100vh;` you can see the effect when you add `align-items: center;` 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/kf1u8j546dzdy3sech7j.png)

Before you forget, copy and paste the code from the dev-tools to the code-base inside the back ticks and above the `.modal` attribute.  

```css
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
```

When you get a rerender from your react app, and you try and copy and past it will.

Being able to add css is cool but using the dev-tools like this is great for being able to adjust css to look absolutely perfect. 

let's adjust the height and width of the modal class to be the size we might see a modal being.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vif2ya5ibzdbqx8n0cyh.png)


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pupop03my723nqlwc6cu.png)


after `20px` is highlighted hold shift + up-arrow on your D pad to move with the tens column hold command instead of shift to move it by the hundreds column.

having a definite pixel width might be fine, but having a % will be even better. 

Add 80% to the width and 80vh for the height. 

Copy and paste inside the `.modal` class brackets. 

we want to add a box that a user can exit the modal when clicked and return to the page. to show how styled components will work down the component tree. I will make a new component for the close modal X that will be positioned in the top left corner. 

start by making a new folder called component

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/a526fz4l5ngcap6aahq0.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/6urcx5gp6w672kggvhl2.png)

Make a new file called CloseModal.js inside the component folder. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/enr5yafuvnabx0aef3as.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pe641ii6jvhr83at0md9.png)

make a skeleton for this component. 


```jsx
import React from 'react';

const CloseModal = () => {
    return (
        <div>
            
        </div>
    );
};

export default CloseModal;
```

The div above will be the box that contains the X so we will add two divs and make them into lines

start by adding the `close-button` class name to the newly created div. 

```html
 <div className="close-button">
```

Add two-div tags and give them id's I will be naming them up and down based on what way they slope from left to right. 

The new div will look like this.

```html
<div className="close-button">
        <div id="up"></div>
        <div id="down"></div>
</div>
```

Go back to the Appstyles div and add the three new attributes. 

```CSS
.close-button {
  border: 1px solid black;
}

#up {
  border: 2px solid black;
}
#down {
  border: 2px solid grey;
}
```

I like to make borders while I start so that I can see what is happening and delete them after the positioning is correct. 

When making UI atoms and molecules like this, it is best to make them multiples of 4 so we go back to the dev-tools and experiment with the right look of an X.

We have everything set up enough to go to the dev-tools and template the look. 

In the dev-tools go to the side where you can see the HTML

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mhl1aueohf3xs5rt3j0o.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/17zdrtyirbzjzgy8yq9l.png)

Give it a height and width of `32px`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/c0cgqsf44xc4p3uj7ofd.png)

copy and paste the additions to the css in the AppStyles

```CSS
.close-button {
    border: 1px solid black;
    width: 32px;
    height: 32px;
}
```

Now to position within the modal.

You can do this in grid but I want to show how to do this with flex only because I think it's important to know flex if you want to use react native or master web development.

having another parent-child relationship, and wanting to move the box to the top right corner.We should add `display: flex;` again and `flex-direction: row-reverse`. see what happens if you copy the `<CloseModal />`

The `.modal` should look like this inside the curly brackets. 

```CSS
.modal {
  display: flex;
  flex-direction: row-reverse;
  width: 80%; 
  height: 80vh;
  border: 1px solid black;
}
```

Next, let's use the dev-tools to make a cross inside the box.

add the transform property to `#up` and `#down` id's 

You may have noticed that in my pictures they are span tags and in my snippets they are divs. This is because you can't use `transform` on span tags. 

```CSS
#up {
  border: 2px solid black;
  transform: rotate(-45deg);

}
#down {
  border: 2px solid grey;
  transform: rotate(45deg);
```

To adjust the fine tuning of positioning and sizing we go back to the dev-tools. 

To do this we will add a `position: relative;` so that we move in relation to the parent. then adjust the `top:`, `right:`, and `width:` to go perfectly through the center. 

these are the measurements I came up with for `#down`. 

```css
    position: relative;
    top: 10px;
    right: 6px;
    width: 40px;
```

for the up div, we will do the same thing as for the down div with the devtools helping us on our way. 

these are the three attributes I found. 

```CSS
    position: relative;
    top: 14px;
    right: 6px;
    width: 40px;
```

Now that we have everything line up. let's change round the edges of the divs and change the grey color to brown. 

To both the up and the down divs, add a `border-radius: 25px;` to round the corners and `background-color: black;` on the `#down` id so that they will both be the same color. 

```CSS
background-color: black;
border-radius: 25px;
```

We want to start the functionality for the modal to pop up on a click event. 

this means that we can utilize a boolean and use state to make a button hide when clicked. 

go the `App.js` and import useState at the top. 


```jsx
import React, { useState } from 'react';
```

make a piece of state at the bottom with a boolean as a data type. add this like between the `return` statement and the `function App()` declaration.

```jsx
  const [showModal, setShowModal] = useState(false)
```

Since we are only passing this one level down. I will pass this prop directly to `CloseModal` but [Redux](https://redux.js.org/) or [context](https://reactjs.org/docs/context.html) is a good option if you are incorporating this into a larger app.

```jsx
          <CloseModal
            setShowModal={setShowModal}
            />
```

add props to the _CloseModal.js_

```jsx
const CloseModal = (props) => {
```

Destructure the two props we passed to get under the line above and between the `return`

```jsx
    const {setShowModal} = props;
```

We want to make this show or hide based on a click event. To do this we will add an `onClick` to show the modal when `showModal` is true.


Now to add the on click handler to the `close-modal` div.

```jsx
            <div 
            onClick={() => setShowModal()} 
            className="close-button">
```

The reason why we added the anonymous function: `() => ` before is because if you don't, and you call a function inside a `onClick`, which you have to do in order to pass an argument inside a function for a situation like this, to the onClick handler you will get an infinite rerender. 

To set up a change state. We will make, `setShowModal` to switch to the opposite of whatever it was.

The `onClick` will look like this.

```jsx
onClick={() => setShowModal(prev => (!prev))}
```

We can reuse this onClick with our button to show the modal. 

Make a button underneath the `modal` div

```jsx
        <button onClick={() => setShowModal(prev => (!prev))}>show </button>
```

To make this show the button or the modal, we want to use a Ternenary statement to only show one or the other based on the `showModal` being true or false.

  

The App component should look like this including the 

```jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import CloseModal from './component/CloseModal';

function App() {
  const [showModal, setShowModal] = useState(false)


  return (<>
      <AppStyles>
       {showModal === true ? "T" : "f"}
        <div className="modal">
          <CloseModal 
            setShowModal={() => setShowModal(prev => (!prev))}
            />
        </div>
        
        <button onClick={() => setShowModal(prev => (!prev))}>show </button>
        
        
      </AppStyles>
  </>);
}
// AppStyles...

export default App;
```

The same onClick that we gave to the button in the App.js we can add to the `.modal` div in the _CloseModal.js_.

```jsx
<div 
    onClick={() => setShowModal(prev => (!prev))}
    className="close-button">
```

We are going to change the ternary statement to include what we want to include on true (the CloseModal component) and what the user sees on false, the (button to open the modal).


Go back to the _App.js_ and where it says `"T"`. add the `modal` div including the `<CloseModal />` component. I'm spacing things out so that the code doesn't get messy. 

and move the button to where it says `"f"`.
 
Everything inside the return should look like this. 

```jsx
return (<>
      <AppStyles>
       {showModal === true 
          ?
            <div className="modal">
              <CloseModal 
                setShowModal={setShowModal}
              />
            </div>
          : 
          <button onClick={() => setShowModal(prev => (!prev))}>Show</button>
        }
      </AppStyles>
  </>);
```

Now when you click the Show bottom and the close-modal div you will show or close the button. 

A modal isn't any good without something for a user to interact with.
