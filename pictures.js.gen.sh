#!/bin/bash

echo 'var pictures = [' > js/pictures.js
ls images/ | xargs -I {} echo '"{}",' >> js/pictures.js
echo '];' >> js/pictures.js