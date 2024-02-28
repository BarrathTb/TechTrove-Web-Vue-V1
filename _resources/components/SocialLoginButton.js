/** @format */

const SocialLoginButton = {
	template: `
        <a
            class="btn btn-outline btn-block mb-2"
            :style="{ backgroundColor: color, color: 'white' }"
            href="#"
            @click.prevent="handleSocialLogin">
            <i :class="iconClass"></i> {{ provider }}
        </a>
    `,
	props: {
		provider: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
	},
	computed: {
		iconClass() {
			const icons = {
				Facebook: 'facebook-f',
				Google: 'google',
				Twitter: 'twitter',
			}
			return `fab fa-${icons[this.provider] || 'user'}`
		},
	},
	methods: {
		handleSocialLogin() {
			console.log(`${this.provider} login clicked`)
		},
	},
}
export default SocialLoginButton
