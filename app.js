const ldap = require('activedirectory');

const config = {
  url: 'ldap://172.16.0.140:389',
  baseDN: 'DC=dongwhadev,DC=com',
  username: 'ADLdap',
  password: '1AopenAD1!',
  attributes:{
    user:[
      'distinguishedName',
      'userPrincipalName',
      'sAMAccountName',
      'mail',
      'lockoutTime',
      'whenCreated',
      'pwdLastSet',
      'userAccountControl',
      'employeeID',
      'sn',
      'givenName',
      'initials',
      'cn',
      'displayName',
      'comment',
      'description',
      'badPwdCount'
    ],
    group:[
      'distinguishedName', 'objectCategory', 'cn', 'description'
    ]
  }

}

const client = new ldap(config);
var upwd = 'P@4001367!!';

client.findUser('d4001367', function(err, user) {
  console.log(err);
  console.log(user);

  if (user) {
    client.authenticate(user.userPrincipalName, upwd, function(err, auth) {
      console.log(err);
      console.log(auth);
    });
  }
});

client.findGroups('CN=*70024589*', function(err, groups) {
  if (err) {
    console.log('ERROR: ' + JSON.stringify(err));
    return;
  }

  console.log(groups);
});
