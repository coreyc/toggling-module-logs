# toggling-module-logs
This project accompanies the blog post at: https://www.coreycleary.me/using-the-debug-module-to-avoid-polluting-your-application-logs-with-logs-from-node-modules/

## Running
To start the application with debugging turned on for Express and the other custom logging, run:

`DEBUG=toggling-logs:*,express:* ./bin/www`

For just Express,

`DEBUG=express:* ./bin/www`

The namespace for the custom logging included in the application are:

`toggling-logs:server`
`toggling-logs:error`

Please note that the custom logging is within the application itself, just for simplicity sake to show you how to write your own custom ones you would then include in your own Node modules. As discussed in the blog post, you *usually* will not use the debug module in your application code.

Then, go to `localhost:3000` and see your app running and logs showing up in the console.

## Testing it out
You'll see normal logs showing up if you have them enabled, but testing the error logs can be a bit trickier. One way is to hit an invalid route like `localhost:3000/invalid`. ANother way is to open two shells in your terminal and try to start the applciation in both of them. The second one should log an error that it's already running somewhere else.