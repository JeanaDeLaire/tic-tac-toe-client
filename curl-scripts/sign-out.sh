
curl "https://tic-tac-toe-wdi.herokuapp.com/" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"
echo
