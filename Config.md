--[[

	子弹的配置文件
]]

local BulletConfig = {}

BulletConfig[1] = {
	launchDuration = 2.0,
	bullets = {
		[1] = {
			image = "explosion_1.png",
			launchTime = 0,
			speed = 10,
			width = 201,
			height = 160,
			mass = 1,
			rotationMoment = 1,
			cycles = {
				[1] = {
					offsetX = 500,
					offsetY = 200,
					offsetRotation = 10,
					motionMode = 1,
					flyMode = 1,
					rotateMode = 3,
					obstructionForce = 1.0,
					triggers = {
						[1] = {
							triggerMode = 4,
							triggerParams = 1,
							effects = {
								[1] = {
									effectMode = 2,
									effectParams = nil
								}
							}
						}
					}
				},
				[2] = {
					offsetRotation = 0,
					offsetScale = 1,
					offsetSpeed = 0,
					motionMode = 1,
					flyMode = 1,
					rotateMode = 3,
					obstructionForce = 0.9,
					triggers = {
						[1] = {
							triggerMode = 1,
							triggerParams = nil,
							effects = {
								[1] = {
									effectMode = 2,
									effectParams = nil
								}
							}
						},
						[2] = {
							triggerMode = 2,
							triggerParams = nil,
							effects = {
								[1] = {
									effectMode = 2,
									effectParams = nil
								}
							}			
						}
					}
				},
				[3] = {
					motionMode = 3,
					triggers = {
						[1] = {
							triggerMode = 5,
							triggerParams = 2,
							effects = {
								[1] = {
									effectMode = 1,
									effectParams = nil
								}
							}
						},
						[2] = {
							triggerMode = 4,
							triggerParams = 3,
							effects = {
								[1] = {
									effectMode = 1,
									effectParams = nil
								}
							}			
						}
					}
				}
			}
		}
	}
}

BulletConfig[2] = {

}

BulletConfig[3] = {

}

return BulletConfig