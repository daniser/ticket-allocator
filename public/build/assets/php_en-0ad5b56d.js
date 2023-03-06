const e={"auth.failed":"These credentials do not match our records.","auth.password":"The provided password is incorrect.","auth.throttle":"Too many login attempts. Please try again in :seconds seconds.","pagination.previous":"&laquo; Previous","pagination.next":"Next &raquo;","passwords.reset":"Your password has been reset.","passwords.sent":"We have emailed your password reset link.","passwords.throttled":"Please wait before retrying.","passwords.token":"This password reset token is invalid.","passwords.user":"We can't find a user with that email address.","validation.accepted":"The :attribute field must be accepted.","validation.accepted_if":"The :attribute field must be accepted when :other is :value.","validation.active_url":"The :attribute field must be a valid URL.","validation.after":"The :attribute field must be a date after :date.","validation.after_or_equal":"The :attribute field must be a date after or equal to :date.","validation.alpha":"The :attribute field must only contain letters.","validation.alpha_dash":"The :attribute field must only contain letters, numbers, dashes, and underscores.","validation.alpha_num":"The :attribute field must only contain letters and numbers.","validation.array":"The :attribute field must be an array.","validation.ascii":"The :attribute field must only contain single-byte alphanumeric characters and symbols.","validation.before":"The :attribute field must be a date before :date.","validation.before_or_equal":"The :attribute field must be a date before or equal to :date.","validation.between.array":"The :attribute field must have between :min and :max items.","validation.between.file":"The :attribute field must be between :min and :max kilobytes.","validation.between.numeric":"The :attribute field must be between :min and :max.","validation.between.string":"The :attribute field must be between :min and :max characters.","validation.boolean":"The :attribute field must be true or false.","validation.confirmed":"The :attribute field confirmation does not match.","validation.current_password":"The password is incorrect.","validation.date":"The :attribute field must be a valid date.","validation.date_equals":"The :attribute field must be a date equal to :date.","validation.date_format":"The :attribute field must match the format :format.","validation.decimal":"The :attribute field must have :decimal decimal places.","validation.declined":"The :attribute field must be declined.","validation.declined_if":"The :attribute field must be declined when :other is :value.","validation.different":"The :attribute field and :other must be different.","validation.digits":"The :attribute field must be :digits digits.","validation.digits_between":"The :attribute field must be between :min and :max digits.","validation.dimensions":"The :attribute field has invalid image dimensions.","validation.distinct":"The :attribute field has a duplicate value.","validation.doesnt_end_with":"The :attribute field must not end with one of the following: :values.","validation.doesnt_start_with":"The :attribute field must not start with one of the following: :values.","validation.email":"The :attribute field must be a valid email address.","validation.ends_with":"The :attribute field must end with one of the following: :values.","validation.enum":"The selected :attribute is invalid.","validation.exists":"The selected :attribute is invalid.","validation.file":"The :attribute field must be a file.","validation.filled":"The :attribute field must have a value.","validation.gt.array":"The :attribute field must have more than :value items.","validation.gt.file":"The :attribute field must be greater than :value kilobytes.","validation.gt.numeric":"The :attribute field must be greater than :value.","validation.gt.string":"The :attribute field must be greater than :value characters.","validation.gte.array":"The :attribute field must have :value items or more.","validation.gte.file":"The :attribute field must be greater than or equal to :value kilobytes.","validation.gte.numeric":"The :attribute field must be greater than or equal to :value.","validation.gte.string":"The :attribute field must be greater than or equal to :value characters.","validation.image":"The :attribute field must be an image.","validation.in":"The selected :attribute is invalid.","validation.in_array":"The :attribute field must exist in :other.","validation.integer":"The :attribute field must be an integer.","validation.ip":"The :attribute field must be a valid IP address.","validation.ipv4":"The :attribute field must be a valid IPv4 address.","validation.ipv6":"The :attribute field must be a valid IPv6 address.","validation.json":"The :attribute field must be a valid JSON string.","validation.lowercase":"The :attribute field must be lowercase.","validation.lt.array":"The :attribute field must have less than :value items.","validation.lt.file":"The :attribute field must be less than :value kilobytes.","validation.lt.numeric":"The :attribute field must be less than :value.","validation.lt.string":"The :attribute field must be less than :value characters.","validation.lte.array":"The :attribute field must not have more than :value items.","validation.lte.file":"The :attribute field must be less than or equal to :value kilobytes.","validation.lte.numeric":"The :attribute field must be less than or equal to :value.","validation.lte.string":"The :attribute field must be less than or equal to :value characters.","validation.mac_address":"The :attribute field must be a valid MAC address.","validation.max.array":"The :attribute field must not have more than :max items.","validation.max.file":"The :attribute field must not be greater than :max kilobytes.","validation.max.numeric":"The :attribute field must not be greater than :max.","validation.max.string":"The :attribute field must not be greater than :max characters.","validation.max_digits":"The :attribute field must not have more than :max digits.","validation.mimes":"The :attribute field must be a file of type: :values.","validation.mimetypes":"The :attribute field must be a file of type: :values.","validation.min.array":"The :attribute field must have at least :min items.","validation.min.file":"The :attribute field must be at least :min kilobytes.","validation.min.numeric":"The :attribute field must be at least :min.","validation.min.string":"The :attribute field must be at least :min characters.","validation.min_digits":"The :attribute field must have at least :min digits.","validation.missing":"The :attribute field must be missing.","validation.missing_if":"The :attribute field must be missing when :other is :value.","validation.missing_unless":"The :attribute field must be missing unless :other is :value.","validation.missing_with":"The :attribute field must be missing when :values is present.","validation.missing_with_all":"The :attribute field must be missing when :values are present.","validation.multiple_of":"The :attribute field must be a multiple of :value.","validation.not_in":"The selected :attribute is invalid.","validation.not_regex":"The :attribute field format is invalid.","validation.numeric":"The :attribute field must be a number.","validation.password.letters":"The :attribute field must contain at least one letter.","validation.password.mixed":"The :attribute field must contain at least one uppercase and one lowercase letter.","validation.password.numbers":"The :attribute field must contain at least one number.","validation.password.symbols":"The :attribute field must contain at least one symbol.","validation.password.uncompromised":"The given :attribute has appeared in a data leak. Please choose a different :attribute.","validation.present":"The :attribute field must be present.","validation.prohibited":"The :attribute field is prohibited.","validation.prohibited_if":"The :attribute field is prohibited when :other is :value.","validation.prohibited_unless":"The :attribute field is prohibited unless :other is in :values.","validation.prohibits":"The :attribute field prohibits :other from being present.","validation.regex":"The :attribute field format is invalid.","validation.required":"The :attribute field is required.","validation.required_array_keys":"The :attribute field must contain entries for: :values.","validation.required_if":"The :attribute field is required when :other is :value.","validation.required_if_accepted":"The :attribute field is required when :other is accepted.","validation.required_unless":"The :attribute field is required unless :other is in :values.","validation.required_with":"The :attribute field is required when :values is present.","validation.required_with_all":"The :attribute field is required when :values are present.","validation.required_without":"The :attribute field is required when :values is not present.","validation.required_without_all":"The :attribute field is required when none of :values are present.","validation.same":"The :attribute field must match :other.","validation.size.array":"The :attribute field must contain :size items.","validation.size.file":"The :attribute field must be :size kilobytes.","validation.size.numeric":"The :attribute field must be :size.","validation.size.string":"The :attribute field must be :size characters.","validation.starts_with":"The :attribute field must start with one of the following: :values.","validation.string":"The :attribute field must be a string.","validation.timezone":"The :attribute field must be a valid timezone.","validation.unique":"The :attribute has already been taken.","validation.uploaded":"The :attribute failed to upload.","validation.uppercase":"The :attribute field must be uppercase.","validation.url":"The :attribute field must be a valid URL.","validation.ulid":"The :attribute field must be a valid ULID.","validation.uuid":"The :attribute field must be a valid UUID.","validation.custom.attribute-name.rule-name":"custom-message","factor.expressive":"Symfony Expression Language powered factor","factor.ticket.category":"Ticket category","validation.attributes.name":"name","validation.attributes.description":"description","validation.attributes.operators":"operators","validation.attributes.ticket_categories":"ticket categories","validation.attributes.user":"user","validation.attributes.ticket_limit":"ticket limit","validation.attributes.complexity_limit":"complexity limit","validation.attributes.teams":"teams"};export{e as default};
//# sourceMappingURL=php_en-0ad5b56d.js.map
