import assert from 'node:assert/strict'
import test from 'node:test'
import { skillCategories, technologies } from '../src/data/portfolio.js'

test('technologies include Vercel and contain no duplicates', () => {
  assert.ok(technologies.includes('Vercel'))
  assert.equal(new Set(technologies).size, technologies.length)
})

test('skill categories are available in French and English', () => {
  assert.deepEqual(Object.keys(skillCategories).sort(), ['en', 'fr'])
  for (const categories of Object.values(skillCategories)) {
    assert.equal(categories.length, 3)
    assert.ok(categories.some(([, title, tools]) => title === 'Tools' || title === 'Outils' ? tools.includes('Vercel') : false))
  }
})
