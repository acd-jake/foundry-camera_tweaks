Hooks.on('renderCameraViews', async function(cameraviews, html) {
        html.find('.camera-view').each((index, camera)=>{
            camera.dataset.scene = game.scenes.viewed.data._id;
            camera.parentNode.dataset.scene = game.scenes.viewed.data._id;
        })
		let avatars = [];
        html.find('.user-avatar').each((index, avatar)=>{
			avatars.push(avatar);
        })
        html.find('.user-camera').each((index, avatar)=>{
            avatar.insertAdjacentHTML('afterend', `<img class="user-avatar" src="`+avatars[index].src+`" style="width: 75px; height: 75px; position: absolute; top: auto; bottom: 0px;">`)
        })
        
});