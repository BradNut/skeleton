<script context="module">
  export async function load({ page }) {
    try {
      const Post = await import(`../../posts/${page.params.slug}.md`);

      return {
        // Data passed into svelte component
        props: {
          Post: Post.default
        }
      };
    } catch (e) {
      // return {
      //   status: 307,
      //   redirect: '/posts'
      // };
      // For status to work we need the correct outputs
      // 404 needs and error message
      // Redirect need status and redirect
      return {
        status: 404,
        error: 'Post not found'
      };
    }
  }
</script>

<script>
  export let Post;
</script>

<Post />
