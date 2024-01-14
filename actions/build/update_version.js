module.exports = async ({ release_type }) => {
  const fs = require('fs').promises;
  const content = JSON.parse(
    await fs.readFile('package.json', { encoding: 'utf8' })
  );

  const [major, minor, patch] = content.version.split('.').map(parseInt);

  content.version = version;

  await fs.writeFile('package.json', JSON.stringify(content, undefined, 2), {
    encoding: 'utf8',
  });

  return 
};
