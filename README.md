# Du it!
![gif](./src/images/du-it.gif?raw=true)
Click [here](https://youtu.be/VHXAkeIC1_0) for full demo.

#### GitHub Repositories:
- [Front-end](https://github.com/joshmrallen/du-it-client)
- [Back-end](https://github.com/joshmrallen/du-it-backend)

## Description
Du it! Du (读, pinyin: dú) is mandarin Chinese for "read."

I've been learning Chinese since 2007, graduated with a degree in Chinese, and lived in China for several years -- but my reading ability never feels right.

That's why I created Du it! It's a way to quickly define words without losing flow while reading.

Every word lookup gets added to a word list and a flashcard is created for you to test yourself.

### _Doesn't Kindle do that already?_

Yes, but I don't like the way Kindle does it. There's no pronunciation and there's no audio! What's more, the flashcard management is kind of annoying.

## Technologies Used
- React.js (front-end)
    - Packages used:
        - React Reader (a React wrapper for epub.js)
- Ruby on Rails (back-end)
    - Gems used:
        - Ruby Pinyin
        - Google Cloud Translate
        - Google Cloud Text-to-Speech
        - AWS S3 Storage

## Challenges
### Public URL's for epub files
The React Reader package is the eReader used and requires the use of a public URL. I had originally planned on using the temporary URL provided by Active Storage on the backend to access the ePub file for use with React Reader. 

For reasons not completely understood yet and also due to the code that makes up the epub.js library that React Reader uses, the URL must be a legitimate http URL in order to read the epub file and not just a file path.

The solution implemented (for now) was to manually upload three "default" books to the AWS S3 bucket and manually specify the file name with the '.epub' extension in order for the epub.js library within React Reader to recognize the epub file.

### Selecting Text on Current Book
In order to allow users to select text while reading (so that the selected word or phrase could be looked up), I had originally planned to use the onSelect event listener provided by the React library, however onSelect runs into issues when the text is within an iFrame element.

The solution implemented was to define a method called selectHandler which would fire on execution of an onMouseUp event listener. Inside selectHandler, I used querySelector to select the iFrame element. I then called contentWindo on that element, which gave me access to the getSelection method, which I then called toString() on, saving the selected text which I then passed up through props and saved into state.

### Text Pronunciation via Google Cloud Text to Speech
I wasn't sure at first how to use the response from the Google Cloud API's Text to Speech service. The JSON response is a property called audioContent, whose value is a base64 mp3 encoded string.

Reading documentation and examples for the JavaScript Audio() object contructor, I at first attempted to write the string into a file for which I specified the mp3 extension. I then tried to save it to AWS S3. This was a little complicated and I eventually found a simpler solution from an example where the person had passed in the actual encoded string along with the following text before it: 'data: audio/mpeg; base64,...' (without the ellipsis, of course). Once I implemented this, it worked perfectly since the HTMLAudioElement it creates is created with its preload property set to 'auto.'

## Collaboration
Contact me to collaborate: joshmrallen@gmail.com

## Future Implementations
 
 - Allow Users to upload their own ePub files
