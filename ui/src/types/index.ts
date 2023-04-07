export type Txt2ImageResponse = {
  images: string[]
  parameters: Record<string, unknown>
  info: string
}

export type Txt2ImageParams = Partial<{
  enable_hr: boolean
  denoising_strength: number
  firstphase_width: number
  firstphase_height: number
  hr_scale: number
  hr_upscaler: string
  hr_second_pass_steps: number
  hr_resize_x: number
  hr_resize_y: number
  prompt: string
  styles: string[]
  seed: number
  subseed: number
  subseed_strength: number
  seed_resize_from_h: number
  seed_resize_from_w: number
  sampler_name: string
  batch_size: number
  n_iter: number
  steps: number
  cfg_scale: number
  width: number
  height: number
  restore_faces: boolean
  tiling: boolean
  do_not_save_samples: boolean
  do_not_save_grid: boolean
  negative_prompt: string
  eta: number
  s_churn: number
  s_tmax: number
  s_tmin: number
  s_noise: number
  override_settings: Record<string, unknown>
  override_settings_restore_afterwards: true
  script_args: []
  sampler_index: string
  script_name: string
  send_images: true
  save_images: boolean
  alwayson_scripts: Record<string, unknown>
}>
