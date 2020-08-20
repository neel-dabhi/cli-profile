'use strict';

const React = require('react');
const { Box, Text } = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const items = createItems([
  {
    label: '🌎  Website',
    url: 'https://neelkanthjdabhi.github.io/'
  },
  {
    label: '💻  Projects',
    url: 'https://github.com/neelkanthjdabhi?tab=repositories'
  },
  {
    label: '💾  GitHub',
    url: 'https://github.com/neelkanthjdabhi'
  },
  {
    label: '🐦  Twitter',
    url: 'https://twitter.com/intent/user?screen_name=neelkanthjdabhi'
  },
  {
    label: '💼  LinkedIn',
    url: 'https://www.linkedin.com/in/neelkanthjdabhi/'
  },
  {
    label: '📬  Email',
    url: 'mailto:neelkanth@dal.ca'
  },
  {
    label: '🔐  PGP Key',
    url: 'https://raw.githubusercontent.com/neelkanthjdabhi/neelkanthjdabhi.github.io/master/pub.asc'
  },
  {
    label: '👔  Résumé (PDF)',
    url: 'https://neelkanthjdabhi.github.io/resume.pdf'
  },
  {
    label: '🚪  Quit',
    action() {
      process.exit();
    }
  }
]);

const menu = () => (
  <Box flexDirection="column">
    <Gradient name="pastel">
      <BigText text="Neelkanth" />
    </Gradient>
    <Box marginBottom={1}>
      <Text color="green">I'm a software engineer based in Halifax, NS specializing in building and designing exceptional websites, applications, and everything in between.</Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
  </Box>
);

module.exports = menu;
