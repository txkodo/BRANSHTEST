module.exports = async ({ version }) => {
  const fs = require('fs').promises;
  const content = JSON.parse(
    await fs.readFile('package.json', { encoding: 'utf8' })
  );
  content.version = version;
  await fs.writeFile('package.json', JSON.stringify(content, undefined, 2), {
    encoding: 'utf8',
  });
};
