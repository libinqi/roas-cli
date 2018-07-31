#! /bin/bash

npm link
rm -rf ../roas-demo
mkdir ../roas-demo
cd ../roas-demo && roas
