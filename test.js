import test from 'ava';
import execa from 'execa';

test('default ROT-13', async t => {
	const {stdout} = await execa('./cli.js', ['unicorn']);
	t.is(stdout, 'havpbea');
});

test('non-default ROT', async t => {
	const {stdout} = await execa('./cli.js', ['unicorn', '-n', '20']);
	t.is(stdout, 'ohcwilh');
});