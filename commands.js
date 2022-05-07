const commands = [
  {
    'git init': [
      'git init [repository name]',
      'This command is used to start a new repository in a directory.',
    ],
  },
  {
    'git status': [
      'git status',
      'This command lists all the files that have to be committed.',
    ],
  },
  {
    'git add': [
      'git status',
      'This command adds a file to the staging area.',
      'git add .',
      'This command adds only those files to the stagging area that are modified',
      'Usage: git add *',
      'This command adds one or more to the staging area.',
    ],
  },
  {
    'git commit': [
      'Usage: git commit -m “[ Type in the commit message]”',
      'This command records or snapshots the file permanently in the version history.',
      'Usage: git commit -a',
      'This command commits any files you’ve added with the git add command and also commits any files you’ve changed since then.',
    ],
  },
  {
    'git clone': [
      'git clone',
      'This command is used to obtain a repository from an existing URL.',
    ],
  },
  {
    'git log': [
      'git log',
      'This command is used to list the version history for the current branch.',
    ],
  },
  {
    'git remote': [
      'git remote add [variable name] [Remote Server Link]',
      'This command is used to connect your local repository to the remote server.',
    ],
  },
  {
    'git push': [
      'git push [remote name] master',
      'This command sends the committed changes of master branch to your remote repository.',
    ],
  },
  {
    'git pull': [
      'git pull [remote name] branch',
      'This command fetches and merges changes on the remote server to your working directory.',
    ],
  },
  {
    'git checkout': [
      'git checkout [branch name]',
      'This command is used to switch from one branch to another.',
      'git checkout -b [branch name]',
      'This command creates a new branch and also switches to it.',
    ],
  },
  {
    'git branch': [
      'git branch',
      'This command lists all the local branches in the current repository.',
      'git branch [branch name]',
      'This command creates a new branch.',
      'git branch -d [branch name]',
      'This command deletes the feature branch.',
    ],
  },
  {
    'git merge': [
      'git merge [branch name]',
      'This command merges the specified branch’s history into the current branch.',
    ],
  },
];
