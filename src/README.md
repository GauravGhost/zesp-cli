## Zesp Cli [ IN PROGRESS ]

- A Simple yet Powerful Structure generator tool to generate complex folder structure with basic template in second with
  custom configuration.
- Either you can use default configuration or you can use your configuration
- You can also define your own template, and it will just produce template file for every file.

### Yaml Configuration Structure
- language
- structure
- config (optional)

**Example Configuration YAML file.**

```yaml
language: node

structure:
  # Controller File
  controller:
    location: lib/controller
    file:
      bookingController:
        - booking
        - booking.status
        - booking.confirm
        - booking.cancel
        - confirm.booking
      seatController:
        - available
        - not.available

      # Service File
  service:
    location: lib/service
    file:
      bookingService:
        - booking
        - booking.status
        - booking.confirm
        - booking.cancel
      seatService:
        - available
        - not.available

config:
  # Method [template, structure] -> Default Structure
  method: template,
  # Case [camel, pascal] -> Default Camel.
  case: camel
```

### TODO
- [ ] Add Custom Configuration
- [ ] Add More language support
- [ ] Add File Templates for service, controller, router, repository
- [ ] Add Support for node framework like express, fastify.
- [ ] Add Project initializer to create a backend template.