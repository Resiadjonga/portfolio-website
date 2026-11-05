import assert from 'node:assert/strict'
import test from 'node:test'
import { socialLinks } from '../src/data/socialLinks.js'

test('social profiles have labels, destinations, and icon paths', () => {
  assert.deepEqual(socialLinks.map(({ label }) => label), ['LinkedIn', 'WhatsApp', 'GitHub'])
  for (const { url, icon } of socialLinks) {
    assert.ok(typeof url === 'string' || typeof url === 'function')
    assert.ok(icon.startsWith('/'))
  }
})

test('WhatsApp link uses the matching greeting language', () => {
  const whatsapp = socialLinks.find(({ label }) => label === 'WhatsApp')
  assert.match(whatsapp.url(false), /Bonjour%20Resia/)
  assert.match(whatsapp.url(true), /Hello%20Resia/)
})
