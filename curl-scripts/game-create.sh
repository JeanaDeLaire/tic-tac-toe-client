curl --include --request POST \ "https://tic-tac-toe-wdi.herokuapp.com/games" \
 --header "Content-Ty;e: applications/json" \
 --header "Authorization: Token token=${TOKEN}" \
 --data '{}'

echo
